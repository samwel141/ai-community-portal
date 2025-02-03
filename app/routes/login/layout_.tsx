import { FC, ReactNode } from "react";

export const LoginLayout: FC<{
    children: ReactNode;
    title: string;
    subtitle?: string;
}> = ({ children, subtitle, title }) => {
    return (
        <section className={"h-screen bg-accent grid grid-cols-2 "}>
            <div
                style={{
                    backgroundImage: "url(/images/login-banner.webp",
                }}
                className={"bg-cover bg-left"}
            >
                <div
                    className={
                        "bg-gradient-to-b from-primary/70 h-full center text-white text-4xl font-medium to-primary-800"
                    }
                >
                    <p
                        className={
                            "font-semibold tracking-wide leading-relaxed"
                        }
                    >
                        {" "}
                        Total solution in
                        <br />
                        <span className={"text-secondary pr-2"}>
                            Agriculture
                        </span>
                        value chain
                    </p>
                </div>
            </div>
            <div
                className={
                    "center flex-col justify-between space-y-10 bg-white relative overflow-hidden"
                }
            >
                <div
                    className={
                        " w-[28rem] rounded-3xl h-full center flex-col px-8 space-y-3 relative z-20"
                    }
                >
                    {/* <AgricomLogo2Icon className={"w-24 mx-auto"} /> */}
                    <div className={"center"}>
                        <div
                            className={
                                "center flex-col space-y-5 pb-2  pt-5 text-dark"
                            }
                        >
                            <h1
                                className={
                                    "text-3xl font-semibold text-dark-green"
                                }
                            >
                                {title}
                            </h1>
                            <p className={"text-center text-sm  text-muted "}>
                                {subtitle}
                            </p>
                        </div>
                    </div>

                    {children}
                </div>
            </div>
        </section>
    );
};
