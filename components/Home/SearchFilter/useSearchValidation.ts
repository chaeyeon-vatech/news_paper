import { useMemo } from "react";
import * as yup from "yup";

const useSearchValidation = () => {
  const schema = useMemo(() => {
    return yup.object().shape({
      date: yup.date().nullable(),
      countryList: yup.array().of(yup.string()),
      headline: yup.string(),
    });
  }, []);

  return { schema };
};

export default useSearchValidation;
