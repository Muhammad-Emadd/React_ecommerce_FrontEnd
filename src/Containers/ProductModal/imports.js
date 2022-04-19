import { getCardDetails } from "../../GraphQL/Queries";
import { getData } from "../../Helpers/helpers";
import {
  choosedCurrAtom,
  chosenProductAtom,
  setChosenAttributesAtom,
  toggleDialogAtom,
  resetCountAtom,
  resetCheckedAttributesAtom,
} from "../../Jotai/Atoms";
import ProductAttributes from "../../Components/ProductAttributes";

export {
  ProductAttributes,
  choosedCurrAtom,
  chosenProductAtom,
  setChosenAttributesAtom,
  toggleDialogAtom,
  resetCountAtom,
  resetCheckedAttributesAtom,
  getCardDetails,
  getData,
};
