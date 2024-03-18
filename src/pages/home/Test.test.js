import { render, screen, fireEvent  } from '@testing-library/react';
// import Navbar from "../../features/navbar/Navbar"
import Test from "./Test";

test("***********render for list item****************************************",()=>{
    render(<Test />);
    const linkEL = screen.getAllByRole("listitem");
    expect(linkEL).toHaveLength(3)
});


// testId

test("check by=========================================== testId", ()=>{
    render(<Test />);
    const testId = screen.getByTestId("testId");
    expect(testId).toBeInTheDocument()
})

// get by title //title 
test("sum shuld be 10, ***10* ===================", ()=>{
    render(<Test />);
    const sumElement = screen.getByTitle("sum");
    
    expect(sumElement.textContent).toBe("10");
});

//get by place holder 

test("username should be rendered !", ()=>{
    render(<Test />);
    const userInput = screen.getByPlaceholderText("username");
    expect(userInput).toBeInTheDocument();
})
// password should be render 
test("password should be rendered ", ()=>{
    render(<Test />);
    const password = screen.getByPlaceholderText("password");
    expect(password).toBeInTheDocument();

})

// form  
test("form should be rendered", ()=>{
    render(<Test />);
    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
    
})
// button should be rendered
test("button should be rendered ", ()=>{
    render(<Test />);
    const button = screen.getByRole("buttonElement");
    expect(button).toBeInTheDocument();
})

// button should be disabled 
test("button should be disabled", ()=>{
    render(<Test />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
});
// error message should not be vissible 
test("error message should not be vissible", ()=>{
    render(<Test />);
    const errorMessage = screen.getByTestId("error");
    expect(errorMessage).not.toBeVisible();
});


// input should be Empty 
test("input should be Empty  ", ()=>{
    render(<Test />)
    const userInput = screen.getByPlaceholderText("username");
    expect(userInput.value).toBe("")
})
// input should be change by onchange event 
test("password input should be change by Onchange event **********", ()=>{
    render(<Test />);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const test = "";
    fireEvent.change(passwordInput, {target:{value:test}})
    expect(passwordInput.value).toBe(test)
    // expect(passwordInput).toBeInTheDocument();

    
})

//username should be change by onchange event 
test("username should be change by onchange event",()=>{
    render(<Test />);
    const userINput = screen.getByPlaceholderText(/username/i);
    const testValue ="";
    fireEvent.change(userINput, {target:{value:testValue}});
    expect(userINput.value).toBe(testValue);
});