import Dialog, { DialogAction, DialogContents } from "ui/components/Dialog";
import Stack from "ui/components/Stack";
import StackItem from "ui/components/StackItem";
import {
  Button,
  CountryListFilterContainer,
  Headline,
  Input,
} from "ui/styles/filter.styles";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "store";
import { closeDialog } from "store/dialogSlice";
import { Controller, FieldErrors, Resolver, useForm } from "react-hook-form";
import produce from "immer";
import { yupResolver } from "@hookform/resolvers/yup";
import useClinicValidation from "./useSearchValidation";
import { FilterType, setFilter } from "store/filterSlice";

const SearchFilterDialog = () => {
  const isDialogOpen = useSelector((state: StateType) => state.dialog.isOpen);
  const dispatch = useDispatch();
  const handleCloseDialog = () => {
    dispatch(closeDialog());
  };
  const countryList = [
    "대한민국",
    "중국",
    "일본",
    "미국",
    "북한",
    "러시아",
    "프랑스",
    "영국",
  ];
  const { schema } = useClinicValidation();
  const methods = useForm<FilterType>({
    defaultValues: {
      date: null,
    },
    resolver: yupResolver<Resolver<FilterType>>(schema),
    mode: "onSubmit",
  });

  const { register, handleSubmit, control } = methods;
  const [selectedCountry, setSelectedCountry] = React.useState<string[]>([]);

  const onClickCountryList = useCallback(
    (country: string) => {
      setSelectedCountry(
        produce(draft => {
          const countryIndex = draft.indexOf(country);
          if (countryIndex !== -1) {
            draft.splice(countryIndex, 1);
          } else {
            draft.push(country);
          }
        }),
      );
    },
    [setSelectedCountry],
  );

  const onSubmit = (data: FilterType) => {
    console.log(data);
    dispatch(setFilter(data));
    handleCloseDialog();
  };

  const onFail = (error: FieldErrors<FilterType>) => {
    console.log(error);
  };

  return (
    <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
      <DialogContents>
        <Stack direction={"column"} fullWidth fullHeight>
          <StackItem>
            <Headline>헤드라인</Headline>
          </StackItem>
          <StackItem>
            <Input
              {...register("headline")}
              placeholder="검색하실 헤드라인을 입력해주세요."
            />
          </StackItem>
          <StackItem>
            <Headline>날짜</Headline>
          </StackItem>
          <StackItem>
            <Controller
              name="date"
              control={control}
              render={({ field }) => {
                const { value = null, onChange } = field;
                return (
                  <Input
                    type="date"
                    value={value ? value.toISOString().split("T")[0] : undefined}
                    onChange={e => {
                      const selectedDate = new Date(e.target.value);
                      onChange(selectedDate);
                      console.log(selectedDate);
                    }}
                  />
                );
              }}
            />
          </StackItem>
          <StackItem>
            <Headline>국가</Headline>
          </StackItem>
          <StackItem>
            <Stack direction={"row"} wrap={"wrap"}>
              <Controller
                control={control}
                name="countryList"
                render={() => (
                  <Stack direction="row" wrap="wrap">
                    {countryList.map((country, index) => (
                      <StackItem
                        key={index}
                        onClick={() => onClickCountryList(country)}
                      >
                        <CountryListFilterContainer
                          selected={selectedCountry.includes(country)}
                        >
                          {country}
                        </CountryListFilterContainer>
                      </StackItem>
                    ))}
                  </Stack>
                )}
              />
            </Stack>
          </StackItem>
        </Stack>
      </DialogContents>
      <DialogAction>
        <Button onClick={handleSubmit(onSubmit, onFail)}>필터 적용하기</Button>
      </DialogAction>
    </Dialog>
  );
};

export default SearchFilterDialog;
