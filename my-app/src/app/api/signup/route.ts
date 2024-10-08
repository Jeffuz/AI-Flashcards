import { createNewUser } from "@/app/utils/firebaseAuthUtil";
import { firebaseAuth } from "@/app/utils/firebase";
export async function POST(request: Request) {
  const body = await request.json()

  if(!("email" in body) || !("password" in body))
    return Response.json({}, {status: 404, statusText: "Body Missing Field"});
  
  const email = String(body.email);
  const password = String(body.password);
  
  const result = await createNewUser(firebaseAuth, email, password);

  if ("errorCode" in result)
    return Response.json({error: result.errorMessage}, {status: 200, statusText: result.errorMessage})

  return Response.json({body: result.user.uid}, {status: 200})

}