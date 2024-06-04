// Type imports
import { QuizQuestion } from "../types/QuizQuestion";

export const quizQuestions: QuizQuestion[] = [
  {
    id: 0,
    title: "¡Hola! ¿Cómo te llamas?🙋‍♀️",
    subtitle: "Solo usaremos tu nombre para dirigirnos a ti.",
    type: "name-input",
    inputPlaceholder: "Escribe aquí tu nombre",
  },
  {
    id: 1,
    title: "¡Bienvenida, ",
    subtitle:
      "Estamos encantadas de empezar este camino juntas. Ahora cuéntanos sobre ti y los síntomas que más te preocupan, te escuchamos.",
    type: "welcome",
  },
  {
    id: 2,
    title: "¿Aún tienes la menstruación?",
    type: "single-select",
    options: [
      {
        key: 1,
        label: "NADA - Ni está ni se la espera",
      },
      {
        key: 2,
        label: "POCA - Se está despidiendo",
      },
      {
        key: 3,
        label: "ALTERADA - Algo está cambiando",
      },
      {
        key: 4,
        label: "REGULAR - Baja cada mes sin falta",
      },
    ],
  },
  {
    id: 3,
    title: "¿Hace cuánto no te visita la regla?",
    type: "single-select",
    options: [
      {
        key: 1,
        label: "Menos de 1 año",
      },
      {
        key: 2,
        label: "Entre 1 y 2 años",
      },
      {
        key: 3,
        label: "Entre 2 y 10 años",
      },
      {
        key: 4,
        label: "Más de 10 años",
      },
    ],
  },
  {
    id: 4,
    title: "Parece que estás en perimenopausia.",
    subtitle:
      "¡Bienvenida! Empieza una etapa llena de cambios. Cara al viento y a vivir el momento juntas 👯",
    type: "info",
  },
  {
    id: 5,
    title: "¡Bienvenida a la menopausia bien llevada!",
    subtitle:
      "Una etapa de aprendizajes, emociones y reconocimiento físico extraordinaria está aquí 💪🏾",
    type: "info",
  },
  {
    id: 6,
    title: "¡Bienvenida a la postmenopausia bien llevada!",
    subtitle:
      "Ya sabes de qué va esto, ahora vamos a sacarle el máximo provecho 💃🏾",
    type: "info",
  },
  {
    id: 7,
    title: "¿Has notado alguno de estos síntomas o cambios en tu cuerpo?",
    type: "multi-select",
    options: [
      {
        key: 1,
        label: "SOFOCOS",
      },
      {
        key: 2,
        label: "CANSANCIO",
      },
      {
        key: 3,
        label: "PROBLEMAS DE SUEÑO",
      },
      {
        key: 4,
        label: "AUMENTO PESO / HINCHAZÓN",
      },
      {
        key: 5,
        label: "SEQUEDAD",
      },
      {
        key: 6,
        label: "BAJA LIBIDO",
      },
      {
        key: 7,
        label: "DOLOR ARTICULAR",
      },
      {
        key: 8,
        label: "PELO Y UÑAS FRÁGILES",
      },
      {
        key: 9,
        label: "INESTABILIDAD EMOCIONAL",
      },
    ],
  },
  {
    id: 8,
    title: "Hablemos de los sofocos y sudores. ¿Cuándo los sufres?",
    type: "single-select",
    options: [
      {
        key: 1,
        label: "Día y noche, no me abandonan",
      },
      {
        key: 2,
        label: "Sólo durante el día",
      },
      {
        key: 3,
        label: "Solo por la noche",
      },
    ],
  },
  {
    id: 9,
    title: "Analicemos tu descanso. ¿Qué tal duermes?",
    type: "multi-select",
    options: [
      {
        key: 1,
        label: "Sofocos nocturnos",
      },
      {
        key: 2,
        label: "Insomnio",
      },
      {
        key: 3,
        label: "Problemas para conciliar",
      },
      {
        key: 4,
        label: "Despertares nocturnos",
      },
    ],
  },
  {
    id: 10,
    title: "Salud mental y emocional: ¿Cómo te sientes?",
    type: "multi-select",
    options: [
      {
        key: 1,
        label: "Cambios de humor",
      },
      {
        key: 2,
        label: "Ansiosa",
      },
      {
        key: 3,
        label: "Estresada",
      },
      {
        key: 4,
        label: "Descentrada",
      },
      {
        key: 5,
        label: "Irritable",
      },
      {
        key: 6,
        label: "Triste",
      },
      {
        key: 7,
        label: "Pérdida de memoria",
      },
      {
        key: 8,
        label: "Estoy fenomenal",
      },
    ],
  },
  {
    id: 11,
    title: "Salud sexual y vida íntima",
    subtitle: "Con total confianza, ¿cómo lo estás viviendo?",
    type: "multi-select",
    options: [
      {
        key: 1,
        label: "Sequedad externa",
      },
      {
        key: 2,
        label: "Sequedad interna",
      },
      {
        key: 3,
        label: "Baja libido",
      },
      {
        key: 4,
        label: "Picor genital",
      },
      {
        key: 5,
        label: "Dolor en las relaciones",
      },
      {
        key: 6,
        label: "Infecciones urinarias",
      },
    ],
  },
  {
    id: 12,
    title: "Y finalmente, ¿qué te preocupa de la menopausia?",
    subtitle:
      "Recuérdalo: No estás sola. Entendemos lo que te pasa y estamos aquí para ayudarte ❤️",
    type: "single-select",
    options: [
      {
        key: 1,
        label: "¡Ayuda! Necesito dominar estos síntomas",
      },
      {
        key: 2,
        label: "Ampliar mi conocimiento sobre la menopausia",
      },
      {
        key: 3,
        label: "Conectar y compartir con mujeres como yo",
      },
    ],
  },
  {
    id: 13,
    title: "Antes de acabar, ¿cómo nos has conocido?",
    type: "single-select",
    options: [
      {
        key: 1,
        label: "Prescripción especialista / farmacia",
      },
      {
        key: 2,
        label: "Recomendación de una amiga",
      },
      {
        key: 3,
        label: "Redes sociales",
      },
      {
        key: 4,
        label: "Buscando información sobre menopausia",
      },
      {
        key: 5,
        label: "Prensa",
      },
      {
        key: 6,
        label: "Televisión",
      },
    ],
  },
  {
    id: 14,
    title: ", te proponemos un plan DOMMA para dominar tu menopausia 🌟",
    subtitle: (
      <p>
        Según los síntomas que nos has indicado, nuestro equipo de especialistas
        te recomiendan el tratamiento más completo y efectivo para combatirlos,
        mejorando tu calidad de vida y protegiendo tu salud integral.
        <br />
        <br />
        👩‍⚕️ <span className="font-bold">Recuerda</span>: no existen soluciones
        mágicas. Para obtener resultados óptimos y duraderos, debes
        comprometerte y ser{" "}
        <span className="font-bold">constante durante mínimo 3 meses.</span>*
      </p>
    ),
    type: "goodbye",
  },
  {
    id: 15,
    title:
      "Pasemos a la acción: ¿dónde podemos enviarte la recomendación de tu plan personalizado? 💌",
    subtitle:
      "*Al proporcionar tu dirección de correo electrónico, aceptas recibir e-mails de DOMMA.",
    type: "email-input",
    inputPlaceholder: "Escribe aquí tu correo electrónico",
  },
];
