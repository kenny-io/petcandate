// import { supabase } from "../../src/lib/supabase";
import { createClient } from "@supabase/supabase-js";
// console.log(process.env["SUPABASE_URL"]);
// console.log(process.env.SUPABASE_URL);
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

exports.handler = async (event) => {
  // Insert a row
  try {
    const { data, error } = await supabase.from("Pets").select("*");
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
