type Props = {
 alert: boolean,
 mainText: string,
 description: string,
}

import { Terminal } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "./alert";

const AlertComponent = ({ alert, mainText, description }: Props) => {
  return (
    <Alert
      className={`transition-all ${
        alert ? "top-0 animate-slide-down" : "-top-96  animate-slide-up"
      } delay-0 animate-bounce absolute bg-[#614946] text-white border-none right-0 m-6 w-auto h-auto fade-out-5`}
    >
      <Terminal />
      <AlertTitle>{mainText}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
};

export default AlertComponent;