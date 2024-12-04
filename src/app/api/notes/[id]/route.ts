import { NextResponse } from "next/server";

export function GET (){
	return NextResponse.json({
		message: 'getting single notes...'
	})
}
export function DELETE (){
	return NextResponse.json({
		message: 'Delete single notes' 
	})
}

export function PUT(){
	return NextResponse.json({
		message: 'Update single notes'
	})
}