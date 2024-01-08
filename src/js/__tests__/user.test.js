import Team from "../user";

test('add successful', () => {
    const team = new Team();
    team.add('AA');        
    expect(team.members.has('AA')).toBe(true);
});

test('add object successful', () => {
    const team = new Team();
    const obj = new Object('Team');
    team.add(obj);        
    expect(team.members.has(obj)).toBe(true);
});

test('add throw Error', () => {
    const team = new Team();
    team.add('AA');
    expect(() => team.add('AA')).toThrow('try to add duclicate');
});

test('addAll', () => {
    const team = new Team();
    team.addAll('AA', 'BB', 'CC');
    expect(team.members.size).toBe(3);
});

test('toArray', () => {
    const team = new Team();
    team.add('AA');
    team.add('BB');
    team.add('CC');
    const array = team.toArray();
    expect(array).toEqual(['AA', 'BB', 'CC']);
});