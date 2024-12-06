/* eslint-disable no-constant-binary-expression */
/* eslint-disable no-constant-condition */
import { report } from 'src/libs/benchmark/tasks/report.js';
import { Case } from 'src/libs/benchmark/type.js';

/** optional chaining + 이탈조건 먼저 적는 식으로 하면 그래도 가독성 괜찮고성능 괜찮네 */
const tag = 'optional chaining';
const cases: Case[] = [
  {
    tag: 'use optional chaining',
    fn: () => (1 === undefined ? false : 1 === null ? false : true),
  },
  {
    tag: 'use return if',
    fn: () => {
      if (1 === undefined) return false;
      if (1 === null) return false;
      return true;
    },
  },
  {
    tag: 'use let with escape conditions',
    fn: () => {
      let result: boolean | undefined = undefined;
      if (result === undefined && 1 === undefined) result = false;
      if (result === undefined && 1 === null) result = false;
      result = true;
      return result;
    },
  },
];

report(tag, cases);
