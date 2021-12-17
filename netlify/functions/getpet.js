import { createClient } from "@supabase/supabase-js";
const querystring = require("querystring");
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

exports.handler = async (event) => {
  const name = event.queryStringParameters.name || "World";
  try {
    const { data, error } = await supabase
      .from("Pets")
      .select("*")
      .eq("name", name);
    // Did it work?
    console.log(data, error);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
