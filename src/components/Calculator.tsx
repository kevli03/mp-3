import styled from "styled-components";

const StyledOutput = styled.p`
    color: red;
`;

export default function Calculator(props : {num1: number, num2: number, func: string}) {
    function Calculate(num1: number, num2: number, func: string) {
        let result: number = 0;

        if (isNaN(num1) || isNaN(num2) ) {
            return "Result not computable";
        }

        if (func === "+") {
            result = num1 + num2;
        } else if (func === "-") {
            result = num1 - num2;
        } else if (func === "*") {
            result = num1 * num2;
        } else if (func === "/") {
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                return "Result not computable";
            }
        } else if (func === "**") {
            if (num2 % 1 === 0) {
                if (num1 === 0) {
                    result = 0;
                } else if (num2 === 0) {
                    result = 1;
                } else {
                    result = 1;
                    if (num2 < 0) {
                        for (let i: number = 0; i > num2; i--) {
                            result *= (1 / num1);
                        }
                    } else {
                        for (let i: number = 0; i < num2; i++) {
                            result *= num1;
                        }
                    }
                }
            } else {
                return "Result not computable";
            }
        } else if (func === "Clear") {
            return null;
        }

        if (result < 0) {
            return <StyledOutput>String(result)</StyledOutput>;
        } else {
            return String(result);
        }
    }

    return (
        Calculate(props.num1, props.num2, props.func)
    );
}
