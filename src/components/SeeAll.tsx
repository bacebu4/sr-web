import { AnchorHTMLAttributes } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const SeeAllWrapper = styled.a`
  display: flex;
  cursor: pointer;
`;

const SeeAllTitle = styled.h5`
  font-family: "Poppins";
  font-weight: 500;
  font-size: 1rem;
`;

type SeeAllType = AnchorHTMLAttributes<HTMLAnchorElement>;

export const SeeAll: React.FC<SeeAllType> = (props) => {
  const { t } = useTranslation();

  return (
    <SeeAllWrapper {...props}>
      <SeeAllTitle>{t("See all")}</SeeAllTitle>
      <svg
        width="16"
        height="15"
        viewBox="0 0 16 15"
        fill="none"
        style={{ marginLeft: "8px" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 8H12.86L9.23 12.36C9.14595 12.4611 9.08265 12.5778 9.04369 12.7034C9.00474 12.829 8.99091 12.961 9.00298 13.0919C9.02736 13.3564 9.15578 13.6003 9.36 13.77C9.56421 13.9397 9.8275 14.0214 10.0919 13.997C10.3563 13.9726 10.6003 13.8442 10.77 13.64L15.77 7.64C15.8036 7.59228 15.8337 7.54214 15.86 7.49C15.86 7.44 15.91 7.41 15.93 7.36C15.9753 7.24534 15.9991 7.12329 16 7C15.9991 6.87671 15.9753 6.75466 15.93 6.64C15.93 6.59 15.88 6.56 15.86 6.51C15.8337 6.45786 15.8036 6.40773 15.77 6.36L10.77 0.360002C10.676 0.247119 10.5582 0.156339 10.4252 0.0941181C10.2921 0.0318971 10.1469 -0.000236672 10 1.91036e-06C9.76635 -0.000454603 9.53991 0.0809208 9.36 0.230002C9.25874 0.313951 9.17504 0.417052 9.11369 0.533399C9.05233 0.649746 9.01454 0.777054 9.00246 0.908031C8.99039 1.03901 9.00427 1.17108 9.04331 1.29668C9.08236 1.42229 9.1458 1.53895 9.23 1.64L12.86 6H1C0.734783 6 0.48043 6.10536 0.292893 6.2929C0.105357 6.48043 0 6.73479 0 7C0 7.26522 0.105357 7.51957 0.292893 7.70711C0.48043 7.89465 0.734783 8 1 8Z"
          fill="#B0AFAF"
        />
      </svg>
    </SeeAllWrapper>
  );
};
