const Mock = require("mockjs");
const getQuestionList = require("./data/getQuestionList");

const Random = Mock.Random;

module.exports = [
  {
    url: "/api/question/:id",
    method: "get",
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
          title: Random.ctitle(),
          componentList: [
            {
              fe_id: Random.id(),
              type: "questionTitle",
              title: "标题",
              props: { text: "个人信息调研", level: 1, isCenter: false },
            },
            {
              fe_id: Random.id(),
              type: "questionInput",
              title: "输入框",
              props: { text: "你的姓名", placeholder: "请输入姓名..." },
            },
            {
              fe_id: Random.id(),
              type: "questionInput",
              title: "输入框2",
              props: { text: "你的电话", placeholder: "请输入电话..." },
            },
          ],
        },
      };
    },
  },
  {
    url: "/api/question",
    method: "post",
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
        },
      };
    },
  },
  {
    url: "/api/question",
    method: "get",
    response(ctx) {
      // console.log(ctx);
      console.log(ctx.query);
      const { url = "", query = {} } = ctx;
      const isDeleted = url.indexOf("isDeleted=true") >= 0;
      const isStar = url.indexOf("isStar=true") >= 0;
      const pageSize = parseInt(query.pageSize) || 10;
      return {
        errno: 0,
        data: {
          list: getQuestionList({ len: pageSize, isDeleted, isStar }),
          total: 100,
        },
      };
    },
  },
  {
    url: "/api/question/:id",
    method: "patch",
    response() {
      return {
        errno: 0,
      };
    },
  },
  {
    url: "/api/question/duplicate/:id",
    method: "post",
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
        },
      };
    },
  },
  {
    url: "/api/question",
    method: "delete",
    response() {
      return {
        errno: 0,
      };
    },
  },
];
