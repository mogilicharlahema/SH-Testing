import {isValidEmailTextPattern} from "../../components/helper"
import { isValidPasswordPattern } from "../../components/helper"
import { isValidNumberPattern } from "../../components/helper"

describe("isValid Email", () => {
 
    test("Valid Email", async () => {
        expect(isValidEmailTextPattern("abhishek@surveyheart.com")).toEqual(true)
    })

    test("Without @", async () => {
        expect(isValidEmailTextPattern("abhishek*surveyheart.com")).toEqual(false)
    })

    test("Without com", async () => {
        expect(isValidEmailTextPattern("abhishek@surveyheart.")).toEqual(false)
    })

    test("Test with more than one special char", async () => {
        expect(isValidEmailTextPattern("abhishek@&$%surveyheart@!.com")).toEqual(false)
    })
    
    
})

describe("is valid Password" ,()=>{
     test("only smallletters with number" ,async ()=>{
        expect(isValidPasswordPattern("hema2")).toEqual(false)
     })

     test("only small letters" ,async ()=>{
        expect(isValidPasswordPattern("hema")).toEqual(false)
     })

     test("only capital letters" ,async ()=>{
        expect(isValidPasswordPattern("HEMA")).toEqual(false)
     })

     test("capital letters with one special character" ,async ()=>{
        expect(isValidPasswordPattern("HEMA@")).toEqual(false)
     })

     test("capital letters with one special character and number" ,async ()=>{
        expect(isValidPasswordPattern("HEMA@1")).toEqual(false)
     })

     test("small letters with one special character and number" ,async ()=>{
        expect(isValidPasswordPattern("hema@1")).toEqual(false)
     })

     test("one caps and one small with less characters " ,async ()=>{
        expect(isValidPasswordPattern("Hema@2")).toEqual(false)
     })

     test("good Password" ,async ()=>{
        expect(isValidPasswordPattern("Kundana@20")).toEqual(true)
     })
})

describe("isValidNumberPattern", () => {
    test("Valid 10-digit number", () => {
        expect(isValidNumberPattern("0252525123")).toEqual(true); 
    });

    test("More than 10 digits", () => {
        expect(isValidNumberPattern("02525251234")).toEqual(true); 
    });

    test("Less than 10 digits", () => {
        expect(isValidNumberPattern("02525251")).toEqual(true); 
    });

    test("Non-numeric input", () => {
        expect(isValidNumberPattern("abcdef1234")).toEqual(false); 
    });
});
