import ErrorRepository from '../app';

let errorRep = new ErrorRepository();

errorRep.add('400', 'syntax error');
errorRep.add('403', 'Forbidden');
errorRep.add('403', 'The server understood the request but will not fulfill it');
errorRep.add('500', 'Internal Server');

test('translate error ', () => {
    expect(errorRep.translate('400')).toEqual('syntax error');
});

test('no such error ', () => {
    expect(errorRep.translate('409')).toEqual('Unknown error!');
});