import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';
import { GithubRepo } from '../../core/models/about.model';
import {
  FALLBACK_REPOS,
  REAL_CERTIFICATIONS,
  SKILL_CATEGORIES,
} from '../../data/about.data';

interface GitHubApiRepo {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  topics?: string[];
  fork: boolean;
}

interface GitHubUserStats {
  public_repos: number;
  followers: number;
  following: number;
}

@Component({
  selector: 'app-about',
  imports: [ScrollRevealDirective, RouterModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit, AfterViewInit {
  private readonly http = inject(HttpClient);
  private readonly platformId = inject(PLATFORM_ID);

  readonly certifications = REAL_CERTIFICATIONS;
  readonly skillCategories = SKILL_CATEGORIES;

  readonly repos = signal<GithubRepo[]>(FALLBACK_REPOS);
  readonly userStats = signal<GitHubUserStats | null>(null);
  readonly isLoadingRepos = signal<boolean>(true);

  private readonly languageColors: Record<string, string> = {
    Python: '#3572A5',
    'C#': '#9B4993',
    TypeScript: '#3178C6',
    JavaScript: '#F7DF1E',
    'C++': '#F34B7D',
    HTML: '#E34C26',
    CSS: '#563D7C',
  };

  ngOnInit(): void {
    this.fetchGitHubData();
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadTwitterWidget();
    }
  }

  private fetchGitHubData(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.isLoadingRepos.set(false);
      return;
    }

    // Fetch User Stats
    this.http
      .get<GitHubUserStats>('https://api.github.com/users/hardik-khandala')
      .subscribe({
        next: (stats) => this.userStats.set(stats),
        error: (err) => console.warn('Could not fetch GitHub user stats:', err),
      });

    // Fetch Public Repos
    this.http
      .get<GitHubApiRepo[]>(
        'https://api.github.com/users/hardik-khandala/repos?sort=updated&per_page=10'
      )
      .subscribe({
        next: (apiRepos) => {
          if (Array.isArray(apiRepos) && apiRepos.length > 0) {
            const mapped: GithubRepo[] = apiRepos
              .filter((r) => !r.fork)
              .slice(0, 6)
              .map((r) => ({
                name: r.name,
                description: r.description || 'Public software repository by Hardik Khandala.',
                language: r.language,
                languageColor:
                  (r.language && this.languageColors[r.language]) || '#00f5b8',
                stars: r.stargazers_count,
                forks: r.forks_count,
                url: r.html_url,
                topics: r.topics || [],
              }));

            if (mapped.length > 0) {
              this.repos.set(mapped);
            }
          }
          this.isLoadingRepos.set(false);
        },
        error: (err) => {
          console.warn('Using fallback repos due to GitHub API rate limit:', err);
          this.isLoadingRepos.set(false);
        },
      });
  }

  private loadTwitterWidget(): void {
    const existingScript = document.getElementById('twitter-wjs');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'twitter-wjs';
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.charset = 'utf-8';
      document.body.appendChild(script);
    } else if ((window as any).twttr?.widgets) {
      (window as any).twttr.widgets.load();
    }
  }
}
