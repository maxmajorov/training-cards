import { AxiosResponse } from "axios";
import { instance } from "./api-instance";

export const getCardsAPI = {
  getCardsList(page: number, pageCount: number, cardsPackID: string) {
    return instance.get<any, AxiosResponse<CardsResponseType>, any>(
      `cards/card?page=${page}&pageCount=${pageCount}&cardsPack_id=${cardsPackID}`
    );
  },

  getGradedCardsList(
    page: number,
    pageCount: number,
    min: number = 0,
    max: number = 5
  ) {
    return instance.get<AxiosResponse<CardsResponseType>>(
      `cards/card?page=${page}&pageCount=${pageCount}&min=${min}&max=${max}`
    );
  },

  setCardsGrade(_id: string, grade: number, shots: number) {
    const data: SetCardGradePayloadType = {
      card: {
        _id,
        grade,
        shots,
      },
    };
    return instance.put<
      any,
      AxiosResponse<PUDResponseType>,
      SetCardGradePayloadType
    >(`cards/card`, data);
  },

  getSortCardsList(
    page: number,
    pageCount: number,
    packID: string,
    sortUpdate: string
  ) {
    return instance.get<any, AxiosResponse<CardsResponseType>, any>(
      `cards/card?page=${page}&pageCount=${pageCount}&cardsPack_id=${packID}&sortCards=${sortUpdate}`
    );
  },

  addCard(question: string, answer: string, cardsPack_id: string) {
    const data: AddCardPayloadType = {
      card: {
        question,
        answer,
        cardsPack_id,
      },
    };
    return instance.post<
      any,
      AxiosResponse<PUDResponseType>,
      AddCardPayloadType
    >(`cards/card`, data);
  },

  deleteCard(cardID: string) {
    return instance.delete<AxiosResponse<PUDResponseType>>(
      `cards/card?id=${cardID}`
    );
  },

  updateCard(cardID: string, newQuestion: string, newAnswer: string) {
    const data: UpdateCardPayloadType = {
      card: {
        _id: cardID,
        question: newQuestion,
        answer: newAnswer,
      },
    };

    return instance.put<
      any,
      AxiosResponse<PUDResponseType>,
      UpdateCardPayloadType
    >(`cards/card`, data);
  },
};

// ==== TYPES ====

export type AddCardPayloadType = {
  card: {
    cardsPack_id: string;
    question: string;
    answer: string;
  };
};

export type SetCardGradePayloadType = {
  card: {
    _id: string;
    grade: number;
    shots: number;
  };
};

export type UpdateCardPayloadType = {
  card: {
    _id: string;
    question: string;
    answer: string;
  };
};

export type CardType = {
  _id: string;
  cardsPack_id: string;
  user_id: string;
  answer: string;
  question: string;
  grade: number;
  shots: number;
  comments: string;
  type: string;
  rating: number;
  more_id: string;
  created: string;
  updated: string;
  __v: number;
};

export type CardsResponseType = {
  cards: Array<CardType>;
  packUserId: string;
  cardsTotalCount: number;
  maxGrade: number;
  minGrade: number;
  page: number;
  pageCount: number;
  token: string; //???
  tokenDeathTime: number; //???
};

export type PUDResponseType = {
  cards: Array<CardType>;
  token: string;
  tokenDeathTime: number;
};
