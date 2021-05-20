import dayjs from 'dayjs';

export const makeVoteData = (data) => {
  return {
    title: data.title,
    userId: data.user.userId,
    startDate : data.startDate,
    endDate : data.endDate,
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
  if(list.length < 1) return 0;
  const res = list.reduce((a,b) => a.id > b.id ? a.id : b.id);
  return res + 1;
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