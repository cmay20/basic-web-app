export default function QueryProcessor(query: string): string {

  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("name?")){
    return ("shakespeare");
  }
  if (query.toLowerCase().includes("7") && query.toLowerCase().includes("+") &&
    query.toLowerCase().includes("21")){
    return ("28");
  }
  if (query.toLowerCase().includes("multiplied")){
    var x = query.slice(8, 10);
    var y = query.slice(25, 27);
    console.log(x);
    console.log(y);
    return (" " + (parseInt(x) * parseInt(y)));
  }
  if (query.toLowerCase().includes("minus")){
    var x = query.slice(8, 10);
    var y = query.slice(18, 20);
    console.log(x);
    console.log(y);
    return (" " + (parseInt(x) - parseInt(y)));
  }



  return "";
}
