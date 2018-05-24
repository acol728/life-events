const initialInfoPage = {
    id: "initialPage",
    title: "Let's start with where you are at...",
    show: true,
    questions: [
        {
            placeholder: "Age"
        },
        {
            placeholder: "Networth"
        }
    ]
}

const careerPlansPage = {
    id: "careerPlansPage",
    title: "What are your aspirations...",
    show: false,
    questions: [
        {
            placeholder: "Career"
        },
    ]
}

let pages = [
    initialInfoPage,
    careerPlansPage
]

export default pages