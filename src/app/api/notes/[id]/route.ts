import { NextResponse } from "next/server";

export function GET (){
	return NextResponse.json({
		message: 'getting single name...'
	})
}
export function DELETE (){
	return NextResponse.json({
		message: 'Delete single name' 
	})
}

export function PUT(){
	return NextResponse.json({
		message: 'Update single name'
	})
}