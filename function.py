def solution(N):
    # Calculate the maximum number of letters we can have in the string
    max_letters = min(26, N // 2)
    
    # Generate the string with the calculated number of letters
    result = ''.join(chr(ord('a') + i % max_letters) for i in range(N))
    
    return result

# Test cases
print(solution(3))  # Output may vary: e.g., "aba"
print(solution(5))  # Output may vary: e.g., "abcab"
print(solution(30)) # Output may vary: e.g., "abcdeabcdeabcdeabcdeabcdeabcde"
