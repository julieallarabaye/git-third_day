(function() {
  const anonymousIdCookie = 'lt-anonymous-id';
  const sessionCookie = 'lt-session-data';
  const extraCookieInfo = '; domain=.' + window.location.host + ';secure=true;';
  const queryParams = new URLSearchParams(window.location.search);
  if (queryParams.has('anonId') && window.document.cookie.indexOf(anonymousIdCookie) == -1) {
    const anonId = queryParams.get('anonId');
    const anonymousIdCookieValue = anonymousIdCookie + '=' + anonId + extraCookieInfo;
    window.document.cookie = anonymousIdCookieValue;
  }
  if (queryParams.has('sessionId') && window.document.cookie.indexOf(sessionCookie) == -1) {
    const sessionId = queryParams.get('sessionId');
    let sessionTime = (new Date()).toISOString();
    if (queryParams.has('sessionDate')) {
      sessionTime = queryParams.get('sessionDate');
    }
    const sessionData = JSON.stringify({ 'id': sessionId, 'lastUpdatedDate': sessionTime });
    const sessionCookieValue = sessionCookie + '=' + sessionData + extraCookieInfo;
    window.document.cookie = sessionCookieValue;
  }
  window.lucid.beacon.init();
})();
