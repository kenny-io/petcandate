const querystring = require("querystring");
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        "Content-Type": "text/html",
      },
      body: "HTTP Method not allowed",
    };
  }
  const params = querystring.parse(event.body);

  try {
    const { data, error } = await supabase.from("Pets").insert([
      {
        name: params.name,
        image: params.image,
        age: params.age,
        type: params.type,
        funfact: params.funfact,
        location: params.location,
        lookingfor: params.lookingfor,
      },
    ]);
    // Did it work?
    console.log(data, error);
    return {
      statusCode: 302,
      body: JSON.stringify(data),
      headers: {
        Location: "/thankyou",
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
