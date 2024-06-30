const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      const sendToGoogleAnalytics = ({ name, delta, id, value }) => {
        gtag('event', name, {
          event_category: 'Web Vitals',
          event_label: id,
          value: Math.round(name === 'CLS' ? delta * 1000 : delta), 
          non_interaction: true, 
        });
      };

      getCLS(sendToGoogleAnalytics);
      getFID(sendToGoogleAnalytics);
      getFCP(sendToGoogleAnalytics);
      getLCP(sendToGoogleAnalytics);
      getTTFB(sendToGoogleAnalytics);
    });
  }
};

export default reportWebVitals;