// This is just an example,
// so you can safely delete all default props below

export default {
  action: {
    add: 'Ajouter',
    cancel: 'Annuler',
    login: 'Se connecter',
    signin: 'S\'inscrire',
    readQR: 'Lire le QRCode',
    update: 'Mettre à jours',
    yes: 'Oui',
    import: 'Importer',
    export: 'Exporter',
    delete: {
      data: 'Supprimer toutes vos données',
    },
  },
  error: {
    camera: {
      NotAllowedError: 'You need to grant camera access permission.',
      NotFoundError: 'Aucune caméra sur cet appareil.',
      NotSupportedError: 'Environnement sécurisé requis(HTTPS, localhost)',
      InsecureContextError: 'Environnement sécurisé requis(HTTPS, localhost)',
      NotReadableError: 'Caméra déjà en cours d\'utilisation.',
      OverconstrainedError: 'Caméra non compatible.',
      StreamApiNotSupportedError: '"Stream API" non supporté par le navigateur.',
    },
    different: {
      password: 'Le mot de passe ne correspond pas.',
    },
    duplicate: {
      token: 'Le jeton existe déjà.',
    },
    full: {
      token: 'Tous les jetons ont été correctement importés.',
    },
    partial: {
      token: '{current} sur {max} jetons importés({imported} doublons).',
    },
    empty: {
      token: {
        name: 'Merci de renseigner le nom du jeton.',
        secret: 'Merci de renseigner le code secret du jeton.',
      },
      password: 'Merci de renseigner le mot de passe.',
      passwordNew: 'Merci de renseigner le nouveau mot de passe.',
      passwordConfirmation: 'Merci de confirmer le mot de passe.',
      size: {
        token: {
          secret: 'Le code secret est trop court/long.',
        },
      },
    },
    wrong: {
      password: 'Mot de passe incorrect.',
    },
  },
  label: {
    application: {
      file: 'Fichier',
      deleteAllData: 'Supprimer toutes vos données',
      menu: 'Menu de l\'application',
      password: 'Mot de passe',
      passwordNew: 'Nouveau mot de passe',
      passwordConfirmation: 'Confirmer votre mot de passe',
      updatePassword: 'Nouveau mot de passe',
      title: 'Open Authenticator',
      language: 'Langue',
      token: {
        name: 'Nom du jeton',
        secret: 'Code secret du jeton',
      },
      importExport: {
        default: 'Open authenticator',
      },
      type: {
        export: 'Type d\'exportation',
        import: 'Type d\'importation',
      },
    },
    explanation: {
      language: 'La langue de l\'application',
      delete: {
        token: 'Êtes vous sur de vouloir supprimer le jeton "{name}"?',
        data: 'Êtes vous sur de vouloir supprimer toute les données de l\'application?',
        dataMore: 'Penser à exporter vos données avant de les supprimer.',
      },
      add: {
        token: 'Voulez vous ajouter le jeton {issuer}?',
      },
      update: {
        password: 'Votre mot de passe à été mis à jours.',
      },
      import: 'Tous les jetons ont été importés.',
      error404: 'Oups. Passez votre chemin, rien à voir ici...',
      encryptionImport: 'Données cryptées?',
      encryptionExport: 'Crypter les données?',
      noItems: 'Plus aucun jetons.',
      password: 'Créer un mot de passe pour sécuriser l\'ensemble de vos codes secrets.',
      tokenCopy: '"{token}" est copié dans votre presse-papiers.',
    },
    link: {
      export: {
        title: 'Exporter',
        caption: 'Exporter vos données',
      },
      import: {
        title: 'Importer',
        caption: 'Importer vos données',
      },
      myTokens: {
        title: 'Mes jetons',
        caption: 'Tous mes jetons.',
      },
      settings: {
        title: 'Paramètres',
        caption: 'Paramètres de l\'application',
      },
    },
    title: {
      error404: '404',
      export: 'Exporter vos jetons',
      fromCode: 'Créer un jetons à partir d\'un code secret',
      fromQRCode: 'Créer un jetons à partir d\'un QRCode',
      import: 'Importer des jetons',
      index: 'Tous mes jetons',
      login: 'Bienvenue',
      settings: 'Paramètres',
      signin: 'Première connexion',
    },
  },
};
