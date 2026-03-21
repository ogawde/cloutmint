import { redirect } from "next/navigation";

export default async function BrandHomePage() {
  redirect("/brand/projects");
}

