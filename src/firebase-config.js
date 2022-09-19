const config = {
  apiKey: "AIzaSyAT7JkojGQLQKCSm6a4cLDEcFP68R6iyLk",
  authDomain: "karoz-3c7bb.firebaseapp.com",
  projectId: "karoz-3c7bb",
  storageBucket: "karoz-3c7bb.appspot.com",
  messagingSenderId: "260054200745",
  appId: "1:260054200745:web:b5f6f91d9bbb38f999d4b8",
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
