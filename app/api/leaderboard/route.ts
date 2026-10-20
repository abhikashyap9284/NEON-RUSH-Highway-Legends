import {NextResponse} from 'next/server';
import {getDB} from '@/lib/database';
export const dynamic='force-dynamic';
export async function GET(){try{const db=getDB();if(!db)return NextResponse.json({connected:false,scores:[]});const rows=await db`SELECT nickname, level, points, finish_ms, car, created_at FROM race_scores ORDER BY points DESC, finish_ms ASC LIMIT 20`;return NextResponse.json({connected:true,scores:rows},{headers:{'Cache-Control':'no-store'}})}catch{return NextResponse.json({connected:false,scores:[],error:'Leaderboard database unavailable.'})}}
