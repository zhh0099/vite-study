/*
 * @Author: WindBlows zhanghehan@huawenholdings.com
 * @Date: 2023-02-10 11:24:05
 * @LastEditors: WindBlows zhanghehan@huawenholdings.com
 * @LastEditTime: 2023-02-10 14:33:42
 * @FilePath: \vite-study\commitlint.config.js
 * @Description:
 *
 * Copyright (c) 2023 by zhanghehan@huawenholdings.com, All Rights Reserved.
 */
module.exports = {
    ignores: [(commit) => commit.includes('init')],
    extends: ['@commitlint/config-conventional'],
    rules: {
        'body-leading-blank': [2, 'always'],
        'footer-leading-blank': [1, 'always'],
        'header-max-length': [2, 'always', 108],
        'subject-empty': [2, 'never'],
        'type-empty': [2, 'never'],
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'fix',
                'perf',
                'style',
                'docs',
                'test',
                'refactor',
                'build',
                'ci',
                'chore',
                'revert',
                'wip',
                'workflow',
                'types',
            ],
        ],
    },
};
