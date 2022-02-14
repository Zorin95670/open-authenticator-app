// This is just an example,
// so you can safely delete all default props below

export default {
  action: {
    add: 'Add',
    cancel: 'Cancel',
    login: 'Log in',
    signin: 'Sign in',
    readQR: 'Read QRCode',
    update: 'Update',
    yes: 'Yes',
    import: 'Import',
    export: 'Export',
    delete: {
      data: 'Delete all application data',
    },
  },
  error: {
    camera: {
      NotAllowedError: 'You need to grant camera access permission.',
      NotFoundError: 'No camera on this device.',
      NotSupportedError: 'Secure context required (HTTPS, localhost)',
      InsecureContextError: 'Secure context required (HTTPS, localhost)',
      NotReadableError: 'Camera already in use.',
      OverconstrainedError: 'Installed cameras are not suitable.',
      StreamApiNotSupportedError: 'Stream API is not supported in this browser.',
    },
    different: {
      password: 'Password is different',
    },
    duplicate: {
      token: 'This token already exists.',
    },
    full: {
      token: 'All tokens are already imported.',
    },
    partial: {
      token: 'Import {current} of {max} tokens ({imported} duplicated).',
    },
    empty: {
      token: {
        name: 'Please type token\'s name',
        secret: 'Please type token\'s secret',
      },
      password: 'Please type your password',
      passwordNew: 'Please type your new password',
      passwordConfirmation: 'Please type your password confirmation',
      size: {
        token: {
          secret: 'Incorrect secret size',
        },
      },
    },
    wrong: {
      password: 'Incorrect password',
    },
  },
  label: {
    application: {
      file: 'File',
      deleteAllData: 'Delete all your data',
      menu: 'Application menu',
      password: 'Application password',
      passwordNew: 'New application password',
      passwordConfirmation: 'Confirm your password',
      updatePassword: 'Update your password',
      title: 'Open Authenticator',
      language: 'Language',
      token: {
        name: 'Token name',
        secret: 'Token secret',
      },
      importExport: {
        default: 'Open authenticator',
      },
      type: {
        export: 'Export type',
        import: 'Import type',
      },
    },
    explanation: {
      language: 'Change language',
      delete: {
        token: 'Are you sure to delete {name}?',
        data: 'Are you sure to delete all application data ?',
        dataMore: 'Please make sure your export all the data before confirm this dialog.',
      },
      add: {
        token: 'Do you want to add {issuer}?',
      },
      update: {
        password: 'Password updated.',
      },
      import: 'All tokens are imported',
      error404: 'Oops. Nothing here...',
      encryptionImport: 'With encryption',
      encryptionExport: 'With encryption',
      noItems: 'No more items.',
      password: 'Create an application password to protect all your future credentials.',
      tokenCopy: '"{token}" code is copy to your clipboard.',
    },
    link: {
      export: {
        title: 'Export',
        caption: 'Export data',
      },
      import: {
        title: 'Import',
        caption: 'Import data',
      },
      myTokens: {
        title: 'My tokens',
        caption: 'List of my tokens',
      },
      settings: {
        title: 'Settings',
        caption: 'Application settings',
      },
    },
    title: {
      error404: '404',
      export: 'Export tokens',
      fromCode: 'Create token from code',
      fromQRCode: 'Create token from QRCode',
      import: 'Import tokens',
      index: 'Token list',
      login: 'Welcome',
      settings: 'Settings',
      signin: 'First connection',
    },
  },
};
