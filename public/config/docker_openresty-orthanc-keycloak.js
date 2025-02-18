window.config = {
  routerBasename: '/',
  relativeWebWorkerScriptsPath: '',
  servers: {
    // This is an array, but we'll only use the first entry for now
    dicomWeb: [
      {
        name: 'Orthanc',
        wadoUriRoot: 'https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/wado',
        qidoRoot: 'https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/rs',
        wadoRoot: 'https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/rs',
        qidoSupportsIncludeField: false,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        // REQUIRED TAG:
        // https://github.com/OHIF/ohif-core/blob/59e1e04b92be24aee5d4402445cb3dcedb746995/src/studies/retrieveStudyMetadata.js#L54
        // TODO: Remove tag after https://github.com/OHIF/ohif-core/pull/19 is merged and we bump version
        requestOptions: {
          // undefined to use JWT + Bearer auth
          // auth: 'orthanc:orthanc',
          requestFromBrowser: true,
        },
      },
    ],
  },
  // This is an array, but we'll only use the first entry for now
  oidc: [
    {
      // ~ REQUIRED
      // Authorization Server URL
      authority: 'http://127.0.0.1/auth/realms/ohif',
      client_id: 'ohif-viewer',
      redirect_uri: 'http://127.0.0.1/callback', // `OHIFStandaloneViewer.js`
      // "Authorization Code Flow"
      // Resource: https://medium.com/@darutk/diagrams-of-all-the-openid-connect-flows-6968e3990660
      response_type: 'code',
      scope: 'openid', // email profile openid
      // ~ OPTIONAL
      post_logout_redirect_uri: '/logout-redirect.html',
    },
  ],
}
