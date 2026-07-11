// ============================================
// CONFIGURAÇÃO DO FIREBASE
// ============================================

const firebaseConfig = {
  apiKey: "AIzaSyAnUrOq2H7-aLxgqT3DjKImG62GpSJr-AI",
  authDomain: "agendamento-sala-video.firebaseapp.com",
  projectId: "agendamento-sala-video",
  storageBucket: "agendamento-sala-video.firebasestorage.app",
  messagingSenderId: "531185790681",
  appId: "1:531185790681:web:d418e8ec37d8792b3918c8"
};

// Inicializar o Firebase
firebase.initializeApp(firebaseConfig);

// Criar referência para o banco de dados Firestore
const db = firebase.firestore();

// Nome da coleção
const COLLECTION_NAME = 'agendamentos';
