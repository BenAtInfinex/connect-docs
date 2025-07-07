import React, { useEffect } from 'react';
import Gleap from 'gleap';
import { useHistory, useLocation } from '@docusaurus/router';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { PostHogProvider } from 'posthog-js/react';
import posthog from 'posthog-js';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function Root({ children }) {
  const isBrowser = useIsBrowser();
  const history = useHistory();
  const location = useLocation();
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  useEffect(() => {
    const sendMessage = (url) =>
      parent.postMessage({ type: 'urlChange', url }, 'https://dev.near.org/');
    sendMessage(location.pathname);
    const unlisten = history.listen((loc) => sendMessage(loc.pathname));
    return unlisten;
  }, [history, location]);

  useEffect(() => {
    if (isBrowser) {
      Gleap.initialize('K2v3kvAJ5XtPzNYSgk4Ulpe5ptgBkIMv');
      Gleap.setUrlHandler(/* … */);
    }
    posthog.init(customFields.REACT_APP_PUBLIC_POSTHOG_KEY, {
      api_host: customFields.REACT_APP_PUBLIC_POSTHOG_HOST,
    });
    posthog.capture('$pageview');
    history.listen((loc) => posthog.capture('$pageview', { path: loc.pathname }));
  }, [history, isBrowser]);

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}

export default Root;
