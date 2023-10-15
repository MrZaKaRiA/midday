import { getUserDetails } from "../queries";
import { Client } from "../types";

export async function createTeamBankAccounts(supabase: Client, accounts) {
  const user = await getUserDetails(supabase);

  const { data } = await supabase
    .from("bank_accounts")
    .insert(
      accounts.map((account) => ({
        account_id: account.id,
        bank_name: account.bank_name,
        logo_url: account.logo_url,
        created_by: user?.id,
        team_id: user?.team_id,
        provider: "gocardless",
      })),
    )
    .select();

  return data;
}

export async function createTransactions(supabase: Client, transactions) {
  const user = await getUserDetails(supabase);

  const { data } = await supabase.from("transactions").insert(
    transactions.map((transaction) => ({
      ...transaction,
      team_id: user?.team_id,
    })),
  );

  return data;
}
