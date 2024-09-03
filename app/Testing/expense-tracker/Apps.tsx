import { useState } from "react";
import { ExpenseForm } from "./components/ExpenseForm";
import { ExpenseFilter } from "./components/ExpenseFilter";
import ExpenseList from "./components/ExpenseList";

function Apps() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "utilities" },
    { id: 2, description: "bbb", amount: 10, category: "utilities" },
    { id: 3, description: "ccc", amount: 10, category: "utilities" },
    { id: 4, description: "ddd", amount: 10, category: "utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <h1>Testing Forms</h1>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelecetCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default Apps;
