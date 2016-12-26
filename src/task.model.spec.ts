/**
 * taskModel tests.
 */
import * as mocha from 'mocha';
import { expect } from 'chai';

import { MockAuthenticationService } from './core';
import { ProjectEntity } from './project.entity';
import { projectModel } from './project.model';
import { TaskEntity } from './task.entity';
import { taskModel } from './task.model';

describe('taskModel', () => {
  let auth: MockAuthenticationService;
  const project = projectModel.model;
  const task = taskModel.model;

  before(async () => {
    auth = new MockAuthenticationService();
    await project.remove({}).exec();
    await task.remove({}).exec();
  });

  it('returns error when adding task to project that does not exist', (done) => {
    const taskEntity: TaskEntity = {
      user: auth.mockUser(),
      projectId: 'asdfasdfasdf',
      name: 'name',
      favorited: false,
      archived: false
    };
    task.create(taskEntity).catch((err) => {
      expect(err.message).to.equal('Project does not exist');
      done();
    });
  });

});
