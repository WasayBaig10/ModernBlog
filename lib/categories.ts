import { AuthorWithPosts } from './interface';

// Category keyword mappings
const categoryKeywords: Record<string, string[]> = {
  'Technology': [
    'tech', 'code', 'programming', 'software', 'developer', 'api', 'web',
    'app', 'framework', 'javascript', 'typescript', 'react', 'nextjs',
    'database', 'cloud', 'ai', 'machine learning', 'algorithm', 'data',
    'security', 'devops', 'testing', 'debug', 'deployment', 'server'
  ],
  'Design': [
    'design', 'ui', 'ux', 'interface', 'visual', 'creative', 'brand',
    'logo', 'typography', 'color', 'layout', 'user experience', 'wireframe',
    'prototype', 'figma', 'sketch', 'css', 'responsive', 'accessibility'
  ],
  'Business': [
    'business', 'startup', 'entrepreneur', 'marketing', 'sales', 'strategy',
    'revenue', 'growth', 'funding', 'investment', 'finance', 'economy',
    'management', 'leadership', 'productivity', 'analytics', 'metrics'
  ],
  'Lifestyle': [
    'life', 'health', 'wellness', 'fitness', 'mindfulness', 'productivity',
    'travel', 'food', 'lifestyle', 'personal', 'routine', 'habits',
    'motivation', 'inspiration', 'balance', 'self-care'
  ],
  'Tutorial': [
    'how to', 'guide', 'tutorial', 'learn', 'step by step', 'getting started',
    'beginner', 'introduction', 'basics', 'walkthrough', 'example', 'tips'
  ]
};

/**
 * Derives a category from an author's posts based on keyword analysis
 * Returns the most common category found across all posts, or 'General' if none match
 */
export function deriveAuthorCategory(author: AuthorWithPosts): string {
  if (!author.posts || author.posts.length === 0) {
    return 'General';
  }

  const categoryCounts: Record<string, number> = {};

  // Analyze each post's title and excerpt for category keywords
  author.posts.forEach(post => {
    const text = `${post.title} ${post.excerpt}`.toLowerCase();

    for (const [category, keywords] of Object.entries(categoryKeywords)) {
      // Check if any keyword from this category appears in the post text
      const hasKeyword = keywords.some(keyword => text.includes(keyword.toLowerCase()));
      if (hasKeyword) {
        categoryCounts[category] = (categoryCounts[category] || 0) + 1;
      }
    }
  });

  // Find the category with the most matches
  let maxCount = 0;
  let dominantCategory = 'General';

  for (const [category, count] of Object.entries(categoryCounts)) {
    if (count > maxCount) {
      maxCount = count;
      dominantCategory = category;
    }
  }

  // If no categories matched or matches are too sparse, return 'General'
  if (maxCount === 0 || maxCount < Math.max(1, author.posts.length * 0.2)) {
    return 'General';
  }

  return dominantCategory;
}

/**
 * Gets category-specific color classes for badges
 */
export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    'Technology': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    'Design': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    'Business': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    'Lifestyle': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
    'Tutorial': 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400',
    'General': 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400'
  };

  return colors[category] || colors['General'];
}

/**
 * Gets a category icon (emoji) for visual flair
 */
export function getCategoryIcon(category: string): string {
  const icons: Record<string, string> = {
    'Technology': '',
    'Design': '',
    'Business': '',
    'Lifestyle': '',
    'Tutorial': '',
    'General': ''
  };

  return icons[category] || icons['General'];
}
