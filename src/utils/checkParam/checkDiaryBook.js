const checkIntegerArg = require('./checkIntegerArg');
const checkCreatedDiaryBook = require('./checkCreatedDiaryBook');
const checkYourDiaryBook = require('./checkYourDiaryBook');

const checkDiaryBook = async (userId, diaryBookId) => {
  checkIntegerArg(diaryBookId);
  await checkCreatedDiaryBook(diaryBookId);
  await checkYourDiaryBook(userId, diaryBookId);
};

module.exports = checkDiaryBook;