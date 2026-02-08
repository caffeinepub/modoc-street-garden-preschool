import List "mo:core/List";
import Text "mo:core/Text";
import Time "mo:core/Time";

actor {
  type InterestEntry = {
    parentName : Text;
    childAge : Nat8;
    email : Text;
    desiredStartYear : Nat16;
    submittedAt : Time.Time;
  };

  let entries = List.empty<InterestEntry>();

  public shared ({ caller }) func createEntry(parentName : Text, childAge : Nat8, email : Text, desiredStartYear : Nat16) : async () {
    let entry : InterestEntry = {
      parentName;
      childAge;
      email;
      desiredStartYear;
      submittedAt = Time.now();
    };

    let isDuplicate = entries.any(func(e) { e.email == entry.email and e.parentName == entry.parentName });
    if (not isDuplicate) {
      entries.add(entry);
    };
  };
};
