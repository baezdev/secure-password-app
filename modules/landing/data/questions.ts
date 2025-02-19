interface Question {
  question: string;
  answer: string;
}

export const QUESTIONS_GENERALS: Question[] = [
  {
    question: "¿Por qué debería usar un gestor de contraseñas?",
    answer: "Porque recordar muchas contraseñas seguras es complicado, y usar la misma en todas partes es un riesgo. Un gestor como Pass Fort te permite crear contraseñas únicas y seguras sin necesidad de memorizarlas."
  },
  {
    question: "¿Es seguro guardar mis contraseñas en la nube?",
    answer: "Sí, siempre que uses un servicio confiable con cifrado avanzado, como Pass Fort. Tus contraseñas están protegidas y solo tú puedes acceder a ellas."
  },
  {
    question: "¿Qué pasa si olvido mi contraseña maestra?",
    answer: "Para tu seguridad, no almacenamos tu contraseña maestra. Sin embargo, ofrecemos opciones de recuperación como claves de respaldo o autenticación biométrica si las configuras previamente."
  },
  {
    question: "¿Pass Fort me protege contra ataques o hackeos?",
    answer: "Pass Fort no solo guarda tus contraseñas, sino que también te alerta si alguna de tus credenciales ha sido filtrada en una brecha de seguridad."
  },
  {
    question: "¿Pueden otras personas acceder a mis contraseñas?",
    answer: "No. Pass Fort utiliza un cifrado de extremo a extremo, lo que significa que ni siquiera nuestro equipo puede ver tus datos."
  }
]

export const QUESTIONS_ABOUT_APP: Question[] = [
  {
    question: "¿Cómo funciona Pass Fort?",
    answer: "Pass Fort es un gestor de contraseñas que te permite guardar, organizar y acceder a tus credenciales de forma segura. Solo necesitas crear una cuenta y añadir tus contraseñas; la app las protegerá con cifrado avanzado."
  },
  {
    question: "¿Mis contraseñas están realmente seguras?",
    answer: "Sí. Utilizamos cifrado de grado militar para proteger tus datos, lo que significa que ni siquiera nosotros podemos ver tus contraseñas. Solo tú tienes acceso a ellas."
  },
  {
    question: "¿Puedo acceder a mis contraseñas desde varios dispositivos?",
    answer: "¡Por supuesto! Pass Fort se sincroniza automáticamente en todos tus dispositivos, ya sea en tu computadora, teléfono o tablet."
  },
  {
    question: "¿Pass Fort es gratis?",
    answer: "Pass Fort ofrece una versión gratuita con funciones esenciales y una versión premium con características avanzadas como almacenamiento ilimitado y autenticación biométrica."
  },
  {
    question: "¿Qué pasa si cambio de dispositivo?",
    answer: "Solo necesitas iniciar sesión en Pass Fort en tu nuevo dispositivo y todas tus contraseñas estarán disponibles al instante."
  }
]