import { HtmlParser } from "@angular/compiler";

export let testimonials=[
    {
        image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        fname:"John",
        lname:"Wagner",
        date:"1.01.2020",
        company:"HR Professional,Actelion Pharmaceuticals",
        comment:"Vicker took some great photos at our recent conference in September. He was very patient and adaptable and mixed in well with all of us. The photos included work and social activities and captured the spirit perfectly.",
        rating:"&#9734;&#9734;&#9734;&#9734;&#9734;"
    },{
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
        fname:"Anna",
        lname:"Colley",
        date:"13.02.2021",
        company:"Director,Ayre Media",
        comment:" I can highly recommend Vicker for all your company's need in photography, we hired him for 3 events and his photos are outstanding, very personal and eye fetching. We surly will contract him again!",
        rating:"&#9734;&#9734;&#9734;&#9734;&#9734;"
    },{
        image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
        fname:"Helen",
        lname:"Gardener",
        date:"25.05.2021",
        company:"EduAcademy",
        comment:"I have worked with the company in several roles at different organisations, simply because I am yet to find a better photographer anywhere! Vicker really gets the brief every time, is professional, reliable, flexible and generally lovely to work with. He has given us some brilliant shots we use again and again,highly recommend",
        rating:"&#9734;&#9734;&#9734;&#9734;&#9734;"
    },{
       image: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1600",
        fname:"Amy",
        lname:"Downing",
        date:"30.04.2022",
        company:"Marie Curie Cancer Care",
        comment:"Thank you very much for the photos of the Brain Game, they are brilliant and just what we wanted. I am really pleased with how the new light design came across in the photos and you have captured the evenings atmosphere wonderfully!",
        rating:"&#9734;&#9734;&#9734;&#9734;&#9734;"
    },{
        image: "https://media.istockphoto.com/id/1272948370/photo/portrait-of-a-real-chinese-man-with-excited-expression.jpg?b=1&s=612x612&w=0&k=20&c=7LtlRhiRpvtdAa8Sn0-8KhG9rjcgB4SrBjQqXrUHX20=",
        fname:"Markus",
        lname:"Weatheritt ",
        date:"11.06.2022",
        company:"Wagner and Son",
        comment:"Vickers  provided us throughout several of our brands. He provides us with a professional service every time and his work helps us to market future events. His images are high quality and present and promote our brand well",
        rating:"&#9734;&#9734;&#9734;&#9734;&#9734;"
    },
    {
        image: "https://images.pexels.com/photos/2467464/pexels-photo-2467464.jpeg?auto=compress&cs=tinysrgb&w=1600",
        fname:"Chloe",
        lname:"Bass",
        date:"19.02.2023",
        company:"FlightGlobal",
        comment:"vicker is a professional and regular photographer for our corporate events, and always delivers a really high selection of photos. He's extremely responsive and easy to work with pre and post event too. I would always use him where possible",
        rating: "<span>&#11088;</span>"
    }
 ];

 export interface Itestimonials{
  image: string;
  fname: string;
  lname: string;
  date: string;
  company:string;
  comment:string;
  rating: string;
 }
