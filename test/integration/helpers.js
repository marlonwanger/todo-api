import supertest from 'supertest';
import chai from 'chai';
import app from '../../src/app';

global.app = app;
global.request = supertest(app); //Recebe o express via parametro
global.expect = chai.expect;