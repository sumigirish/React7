import Accordion from "./Accordion"
export default function App(){
  const accordionData = [
    {
      title: "What is Component ?",
      content: "Components are independent and reusable bits of code.",
    },
  {
    title: "What is Props ?",
    content: "Props are arguments passed into React components. ",
  },
  {
  title: "What is State ?",
  content: "State is in-built feature in react which makes application render everytime when a value changes ",
  },
  ];

  return(
<div>
<h1> ReactJS</h1>
<div className="accordion">
{accordionData.map(({title,content}) => (
  <Accordion title = {title} content = {content} />
))}
</div>
</div>

  );
}
