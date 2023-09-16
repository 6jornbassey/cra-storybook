import Accordion from "./Accordion";

export default {
    title: "Components/Accordion",
    component: Accordion
}

const Template = (args) => <Accordion {...args} />;
export const Faqs = Template.bind({});
Faqs.args = {
    data: [
        {
            title: "What is Lorem ipsum?",
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum in, doloribus praesentium blanditiis unde molestias? Nam quo iste modi deserunt."
        },
        {
            title: "Why do we use it?",
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum in, doloribus praesentium blanditiis unde molestias? Nam quo iste modi deserunt."
        }
    ]
}