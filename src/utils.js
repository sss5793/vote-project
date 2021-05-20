import dayjs from 'dayjs';
import { users } from './mocks';

export const makeVoteData = (data) => {
  return {
    title: data.title,
    userId: data.user.userId,
    startDate : data.startDate,
    endDate : data.endDate,
    totalVoteCnt : 0,
    voteItem : makeVoteItem(data.itemList)
  }
};

const makeVoteItem = (items) => {
  let arr = [];
  items.forEach(item => {
    arr = [...arr, {
      id: item.id,
      name: item.value,
      count: 0,
      voterList: [],
    }]
  });
  return arr;
};

export const makeVoteId = (list) => {
  if(list.length < 2) return list.length;
  const res = list.reduce((a,b) => a.id > b.id ? a.id : b.id);
  return parseInt(res) + 1
};

// 카드 분류(진행중, 종료)
export const formatVoteList = (list) => {
  let newProgressVote = [];
  let newEndVote = [];
  list.forEach(element => {
    const res = dayjs().isBefore(element.endDate);
    if(res){
      newProgressVote = [...newProgressVote, element];
    }else{
      newEndVote = [...newEndVote, element];
    }
  });
  return { newProgressVote, newEndVote}
};

// 투표 찾기
export const findVoteInfo = (id, list) => {
  return list.filter(item => item.id === parseInt(id))
}

// 사용자 찾기
export const findUser = (id) => {
  return users.filter(item => item.userId === parseInt(id))
}

// 날짜 포맷
export const formatDate = (date) => {
  return dayjs(date).format('YY.MM.DD');
}

// 투표 결과 추출하기
export const voteResult = (list) => {
  return list.reduce((a,b) => a.percent > b.percent ? a : b);
}