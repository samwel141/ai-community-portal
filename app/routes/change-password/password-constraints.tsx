import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { FC } from "react";

const PasswordConstraint: FC<{ name: string; isValid: boolean }> = ({
    name,
    isValid,
}) => {
    return (
        <div key={name} className={"flex text-sm items-center space-x-2"}>
            <CheckCircleIcon
                className={`h-5 ${
                    isValid ? "text-primary" : "text-gray-300"
                } w-5`}
            />
            <p className={"text-gray-600"}>{name}</p>
        </div>
    );
};
export default PasswordConstraint;
