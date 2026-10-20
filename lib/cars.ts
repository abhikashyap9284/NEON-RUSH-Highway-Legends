export const CARS = [
 {id:'vortex',name:'Vortex GT',category:'STARTER',speed:288,handling:82,accel:79,price:0,color:'#ff654d'},
 {id:'phantom',name:'Phantom R',category:'STREET',speed:307,handling:86,accel:84,price:450,color:'#8f7aff'},
 {id:'storm',name:'Storm X',category:'SUPER',speed:328,handling:83,accel:92,price:1100,color:'#43d9c6'},
 {id:'apex',name:'Apex One',category:'HYPER',speed:356,handling:94,accel:97,price:2400,color:'#ffd06a'},
] as const;
export const LEVELS = Array.from({length:20},(_,i)=>({number:i+1,name:['Sunset Sprint','Coastal Run','Midnight Circuit','Desert Thunder','Alpine Chase','City Pulse','Canyon Attack','Neon Boulevard','Skyline Clash','Final Velocity'][i%10]+(i>=10?' II':''),distance:3500+i*450,opponentSpeed:145+i*5,reward:120+i*45}));
export type RaceResult = {nickname:string, level:number, points:number, finishMs:number, car:string};
