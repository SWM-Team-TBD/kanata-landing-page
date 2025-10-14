import posthog from 'posthog-js';

// Initialize PostHog
export function initPostHog() {
  if (typeof window !== 'undefined') {
    posthog.init(
      import.meta.env.VITE_POSTHOG_KEY || '',
      {
        api_host: import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com',
        autocapture: false,
        capture_pageview: true,
      }
    );
  }
}

/**
 * 페이지 방문 이벤트 추적
 */
export const trackPageView = (pageName: string, additionalProps?: Record<string, any>) => {
  if (typeof window !== 'undefined' && posthog) {
    const eventData = {
      page_name: pageName,
      timestamp: new Date().toISOString(),
      ...additionalProps,
    };
    posthog.capture('$pageview', eventData);
    console.log('[PostHog] Page view tracked:', eventData);
  }
};

/**
 * 버튼 클릭 이벤트 추적
 */
export const trackButtonClick = (
  buttonName: string,
  location: string,
  additionalProps?: Record<string, any>,
) => {
  if (typeof window !== 'undefined' && posthog) {
    const eventData = {
      button_name: buttonName,
      location,
      timestamp: new Date().toISOString(),
      ...additionalProps,
    };
    posthog.capture('button_clicked', eventData);
    console.log('[PostHog] Button click tracked:', eventData);
  }
};

/**
 * 다운로드 버튼 클릭 추적
 */
export function trackDownloadClick(source: string, store: "app_store" | "play_store") {
  if (typeof window !== 'undefined' && posthog) {
    const eventData = {
      source,
      store,
      timestamp: new Date().toISOString(),
    };
    posthog.capture('download_click', eventData);
    console.log('[PostHog] Download click tracked:', eventData);
  }
}

/**
 * 웹 체험 버튼 클릭 추적
 */
export function trackWebTrialClick() {
  if (typeof window !== 'undefined' && posthog) {
    const eventData = {
      timestamp: new Date().toISOString(),
    };
    posthog.capture('web_trial_click', eventData);
    console.log('[PostHog] Web trial click tracked:', eventData);
  }
}

// Track scroll depth
export function initScrollTracking() {
  if (typeof window === 'undefined') return;

  const scrollDepths = [25, 50, 75, 90];
  const scrollDepthsReached: number[] = [];

  const calculateScrollPercentage = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    return docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;
  };

  const handleScroll = () => {
    const scrollPercentage = calculateScrollPercentage();

    scrollDepths.forEach((depth) => {
      if (scrollPercentage >= depth && !scrollDepthsReached.includes(depth)) {
        scrollDepthsReached.push(depth);
        if (posthog) {
          const eventData = {
            scroll_depth: depth,
            page_url: window.location.href,
            timestamp: new Date().toISOString(),
          };
          posthog.capture('scroll_depth', eventData);
          console.log('[PostHog] Scroll depth tracked:', eventData);
        }
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}
